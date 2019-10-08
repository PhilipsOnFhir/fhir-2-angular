import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_VisionPrescription_LensSpecification } from './R4_VisionPrescription_LensSpecification'

export class R4_VisionPrescription      extends R4_DomainResource
{

   static def : string = 'VisionPrescription';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   created : string ;
   patient : R4_Reference ;
   encounter : R4_Reference ;
   dateWritten : string ;
   prescriber : R4_Reference ;
   lensSpecification : R4_VisionPrescription_LensSpecification [];
}
