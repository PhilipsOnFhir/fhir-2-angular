import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_InvoiceStatusEnum } from './R4_InvoiceStatusEnum'
import { R4_Invoice_LineItem } from './R4_Invoice_LineItem'
import { R4_Invoice_Participant } from './R4_Invoice_Participant'
import { R4_Invoice_PriceComponent } from './R4_Invoice_PriceComponent'
import { R4_Money } from './R4_Money'
import { R4_Reference } from './R4_Reference'

export class R4_Invoice      extends R4_DomainResource
{

   static def : string = 'Invoice';
   identifier : R4_Identifier [];
   status : R4_InvoiceStatusEnum ;
   cancelledReason : string ;
   type : R4_CodeableConcept ;
   subject : R4_Reference ;
   recipient : R4_Reference ;
   date : string ;
   participant : R4_Invoice_Participant [];
   issuer : R4_Reference ;
   account : R4_Reference ;
   lineItem : R4_Invoice_LineItem [];
   totalPriceComponent : R4_Invoice_PriceComponent [];
   totalNet : R4_Money ;
   totalGross : R4_Money ;
   paymentTerms : string ;
   note : R4_Annotation [];
}
