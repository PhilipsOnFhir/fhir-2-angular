import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_NoteTypeEnum } from './R5_NoteTypeEnum'

export class R5_PaymentReconciliation_ProcessNote      extends R5_BackboneElement
{

   static def : string = 'PaymentReconciliation_ProcessNote';
   type : R5_NoteTypeEnum ;
   text : string ;
}
