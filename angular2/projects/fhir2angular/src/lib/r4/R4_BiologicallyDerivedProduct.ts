import { R4_BiologicallyDerivedProductCategoryEnum } from './R4_BiologicallyDerivedProductCategoryEnum'
import { R4_BiologicallyDerivedProductStatusEnum } from './R4_BiologicallyDerivedProductStatusEnum'
import { R4_BiologicallyDerivedProduct_Collection } from './R4_BiologicallyDerivedProduct_Collection'
import { R4_BiologicallyDerivedProduct_Manipulation } from './R4_BiologicallyDerivedProduct_Manipulation'
import { R4_BiologicallyDerivedProduct_Processing } from './R4_BiologicallyDerivedProduct_Processing'
import { R4_BiologicallyDerivedProduct_Storage } from './R4_BiologicallyDerivedProduct_Storage'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_BiologicallyDerivedProduct      extends R4_DomainResource
{

   static def : string = 'BiologicallyDerivedProduct';
   identifier : R4_Identifier [];
   productCategory : R4_BiologicallyDerivedProductCategoryEnum ;
   productCode : R4_CodeableConcept ;
   status : R4_BiologicallyDerivedProductStatusEnum ;
   request : R4_Reference [];
   quantity : string ;
   parent : R4_Reference [];
   collection : R4_BiologicallyDerivedProduct_Collection ;
   processing : R4_BiologicallyDerivedProduct_Processing [];
   manipulation : R4_BiologicallyDerivedProduct_Manipulation ;
   storage : R4_BiologicallyDerivedProduct_Storage [];
}
